import _ from 'lodash';

export class LEDCodeInterpreter {

	constructor(){
		this.registers = {
			a: 0
		};
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

	run(code){
		for(let line of code.split('\n')){
			this.executeLine(line);
		}
		return this.state;
	}

	executeLine(line){
		if(_.isEmpty(line)){
			return;
		}
		line = _.trim(line).replace(/\t/g, ' ');
		const [cmd, args] = this._parseTokens(line);
		if(cmd === 'ld'){
			const [register, value] = args.split(',');
			this._load(register, value);
		} else if(cmd === 'out') {
			const [token, register] = args.split(',');
			this._out(register);
		} else {
			throw new Error('Unrecognized command: ' + cmd);
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
