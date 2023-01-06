import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  title = 'actividad-9';
  num1: number = 0;
  num2: number = 0;
  operacion: string = '';
  resultado: number = 0;
  validacion: boolean = true;
  colorRes: string = 'black';

  calcular() {
    let res: number;
    switch (this.operacion) {
      case 'sumar':
        res = this.num1 + this.num2;
        this.colorRes = 'green';
        break;
      case 'restar':
        res = this.num1 - this.num2;
        this.colorRes = 'blue';
        break;
      case 'multiplicar':
        res = this.num1 * this.num2;
        this.colorRes = 'yellow';
        break;
      case 'dividir':
        res = this.num1 / this.num2;
        this.colorRes = 'orange';
        break;
      default:
        this.validacion = false;
        res = 0;
        this.resultado = res;
        return;
    }
    console.log(res);
    this.resultado = res;
  }

}
