import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  op1 = false
  op2 = false
  op = false
  display:string =''+0;
  memory1= 0;
  memory2 = 0;
  state = 'number';
  operator = '+';
  decimal = false;
  decimals = 0;

  clickNumber(n:string) {
    switch (this.state) {
      case 'number':
        this.op1=true;
        if (this.decimal) {
          this.decimals++;
          if(this.memory2 != 0){
            this.display=this.display+'.'+n;
            this.memory2=this.memory2+parseInt(n)* Math.pow(10, (-this.decimals));

          } else{
            this.display =''+ (parseFloat(this.display)+ parseInt(n) * Math.pow(10, (-this.decimals)));
          }

        } else {
          if(this.memory2 != 0){
            this.memory2=this.memory2*10+parseInt(n)
            this.display=this.display+n;
          }
          else{
            if((parseFloat(this.display)*10)!=0){
              this.display =''+parseFloat(this.display)+n;
            }
            else{
              this.display =''+n;
            }
          }

        }
        break;
      case 'operator':
        this.op2= true;
        this.memory2 = parseFloat(n);
        this.display =this.display+n;
        this.state = 'number';
        this.decimals=0;
        break;
      case 'result_inter':
        this.memory1=  parseFloat(this.display);
        this.display =''+n;
        this.state = 'number';
        this.op2 = true;
        break;
      case 'result':
        this.display = ''+n;
        this.state = 'number';
        this.op1 = true;
        break;


    }
  }

  clickOperator(o: string) {

    this.calculate(false);
    this.memory1= parseFloat(this.display);
    this.display= this.display+o;
    this.operator = o;

    this.state = 'operator';

  }

  calculate(bool:boolean) {

    if ((this.op1&&this.op2)||(bool&&this.state=='number')){
    this.display =this.display+'='+eval(this.memory1+ this.operator + this.memory2 );
    this.memory1= 0;
    if(bool)
    this.state = 'result';
    else
    this.state = 'result_inter';
    this.op1=true;
    this.op2 =false;
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
    }
    else
      if(bool&&this.state=='operator'){
        this.memory1;
        this.display='SYNTAX ERROR';
      }
  }

  resetLastNumber() {
    this.display =''+ 0;
    this.state = 'number';
    this.decimal = false;
    this.decimals = 0;
  }

  reset() {
    this.display =''+0;
    this.memory1= 0;
    this.memory2= 0;
    this.state = 'number';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }

  changeSign() {
    this.display ='' + parseFloat(this.display) * -1;
  }

  setDecimal() {
    this.decimal = true;
  }
}

