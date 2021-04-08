import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


// declare var require;
// var jwtDecode = require("jwt-decode");

interface LoginResponse {
    tokenString: string;

}
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private loggedIn;
    private expirationTimeout;

    constructor(
        private router: Router, private route: ActivatedRoute
    ) {
        this.refreshLoginStatus();
    }

    private setSessionExpirationNotification(remainingTimeMs) {
        if (this.expirationTimeout) {
            clearTimeout(this.expirationTimeout);
        }
        // this.expirationTimeout = setTimeout(() => {
            // this.redirectToLogin(this.route.snapshot['_routerState'].url, '  Finished');
        // }, remainingTimeMs);
    }

    public getLoginStatus() {
        if (!localStorage.getItem('token'))
            return false;
        try {
            let token = localStorage.getItem('token');
            // let decodedToken = jwtDecode(token);


        } catch (err) {
            return false;
        }
        return false;
    }



    public refreshLoginStatus() {
        if (!this.loggedIn) {
            this.loggedIn = new BehaviorSubject(this.getLoginStatus());
        } else {
            this.loggedIn.next(this.getLoginStatus());
        }
    }

    public isLoggedIn(): Observable<boolean> {
        this.refreshLoginStatus();
        return this.loggedIn.asObservable();
    }





    getToken() {
        let token = localStorage.getItem('token');
        return token
    }





    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    public redirectToLogin(path, msg) {
        localStorage.clear();
        this.router.navigate(['/login'], {
            queryParams: {
                redirect: path,
                redirectMessage: msg
            }
        })
    }




}
