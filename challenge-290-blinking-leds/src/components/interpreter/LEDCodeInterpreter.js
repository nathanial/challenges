import _ from 'lodash';

export class LEDCodeInterpreter {

	constructor(){
		this.registers = {
			a: 0,
			b: 0
		};
		this.labels = {};
		this.lineNumber = 0;
		this.state = {
			leds: [
				{id: 0, on: false},
				{id: 1, on: false},
				{id: 2, on: false},
				{id: 3, on: false},
				{id: 4, on: false},
				{id: 5, on: false},
				{id: 6, on: false},
				{id: 7, on: false}
			]
		}
	}

	async run(code, options){
		const lines = code.split('\n');
		this.lineNumber = 0;
		while(this.lineNumber < lines.length){
			const line = lines[this.lineNumber];
			await this.executeLine(line, options);
			this.lineNumber += 1;
		}
	}

	executeLine(line, options){
		if(_.isEmpty(_.trim(line))){
			return;
		}
		line = _.trim(line).replace(/\t/g, ' ');
		const tokens = this._parseTokens(line);
		if(tokens.length === 1){
			this._createLabel(tokens[0]);
		} else {
			const [cmd, args] = this._parseTokens(line);
			if(cmd === 'ld'){
				const [register, value] = args.split(',');
				this._load(register, value);
			} else if(cmd === 'out') {
				const [token, register] = args.split(',');
				this._out(register);
			} else if(cmd === 'djnz') {
				const label = args;
				this._djnz(label);
			} else {
				console.error('Bad Line', line);
				throw new Error('Unrecognized command: ' + cmd);
			}
			options.afterInstruction(this.state);
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, 200);
			});
		}
	}

	_createLabel(name){
		name = name.replace(':','');
		this.labels[name] = this.lineNumber;
	}

	_djnz(label){
		this.registers.b -= 1;
		if(this.registers.b > 0){
			this.lineNumber = this.labels[label];
		}
	}

	_load(register, value){
		this.registers[register] = parseInt(value, 10);
	}

	_out(register){
		var value = this.registers[register];
		for(var i = 0; i < 8; i++){
			var on = (value >> (7 - i)) & 0x01;
			this.state.leds[i].on = on;
		}
	}

	_parseTokens(line){
		const tokens = [];
		let token = '';
		let i = 0;
		while(i < line.length){
			if(/\S/.test(line[i])){
				token += line[i];
			} else {
				if(!_.isEmpty(token)){
					tokens.push(token);
					token = '';
				}
			}
			i += 1;
		}
		if(!_.isEmpty(token)){
			tokens.push(token);
		}
		return tokens;
	}
}
