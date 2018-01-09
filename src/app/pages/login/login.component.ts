import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, UserService } from 'ngx-admin-lte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password: string;
  public email: string;

  constructor(private userServ: UserService,
    private router: Router) { }

  ngOnInit() {
     window.dispatchEvent( new Event( 'resize' ) );
  }

   private login() {
     const user1 = new User( {
          avatarUrl: 'assets/img/user2-160x160.jpg',
          email: 'weber.antoine@outlook.com',
          firstname: 'Stephen',
          lastname: 'Ng'
      } );

      user1.connected = true;

      this.userServ.setCurrent( user1 );

      this.router.navigate( ['home'] );

   }

}
