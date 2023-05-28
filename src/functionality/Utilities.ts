import { useAuthStore } from '@/stores/AuthStore';

export class Utilities {
    isAuthenticated(routeName: string) {
        const verifyStore = useAuthStore();
        const token = verifyStore.$state.authToken
        if (token.trim().length < 6) {
           // token = String(localStorage.getItem('authToken'));
                return false
        }
        if (routeName == 'postRequestList')
           {
            const post = verifyStore.$state.loggedUser.post;
            const level = verifyStore.$state.loggedUser.level
            return post && ['अध्यक्ष', 'उपाध्यक्ष', 'सचिव', 'प्रदेशाध्यक्ष']. includes(post) && Number(level) == 1
           }
        return verifyStore.$state.isSet && verifyStore.$state.loggedUser && Number( verifyStore.$state.loggedUser.level)>0
    }
}