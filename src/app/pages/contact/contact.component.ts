import { Component } from '@angular/core';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private contactService: ContactService){}

  testandoBotao(){
    console.log('formulario enviado com sucesso!');
  }

}
