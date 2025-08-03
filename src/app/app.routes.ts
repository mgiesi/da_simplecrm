import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Users } from './users/users';
import { UserDetail } from './user-detail/user-detail';

export const routes: Routes = [
    { path: "",             component: Dashboard },
    { path: "dashboard",    component: Dashboard },
    { path: "users",        component: Users },
    { path: "users/:id",    component: UserDetail }

];
