import { useAuthStore } from '@/stores/AuthStore';

export class Utilities {
    private verifyStore = useAuthStore();
    isAuthenticated(routeName: string) {
        let token = this.verifyStore.$state.authToken
        if (token.trim().length < 6) {
            token = String(localStorage.getItem('authToken'));
            if (token.trim().length < 6)
                return false
        }
        if (routeName == 'postRequestList')
            return false
        return this.verifyStore.$state.isSet && this.verifyStore.$state.loggedUser && Number( this.verifyStore.$state.loggedUser.level)>0
    }
}