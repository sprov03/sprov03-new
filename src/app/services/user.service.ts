import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

@Injectable({providedIn: 'root'})
export class UserService {
    private userUrl = '/api/users';

    constructor(private http: HttpClient) {
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.userUrl}/${id}`);
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.userUrl}`);
    }

    updateUser(user: User): Observable<null> {
        return this.http.put<null>(`${this.userUrl}/${user.id}`, user);
    }

    createUser(user: User): Observable<null> {
        return this.http.post<null>(`${this.userUrl}`, user);
    }
}
