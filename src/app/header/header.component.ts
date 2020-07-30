import { Component, OnInit } from '@angular/core';

/** Component */
import { LoginComponent } from '../login/login.component';

/** Dependencies */
import { faHome, faInfo, faList, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    /** Icons */
    faHome = faHome;
    faInfo = faInfo;
    faList = faList;
    faAddressCard = faAddressCard;
    faSignInAlt = faSignInAlt;

    constructor( public dialog: MatDialog ) { }

    ngOnInit(): void {
    }

    onLoginForm() {
        this .dialog .open( LoginComponent, {
            width: '500px',
            height: '450px'
        });
    }

}
