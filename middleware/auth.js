export default function ({route, redirect}) {    
    if (route.path !== '/auth/signin') {
        if (!$nuxt.$fire.auth.currentUser) {
            return redirect('/auth/signin')
        }
    }else if (route.path === '/auth/signout') {
        if (!$nuxt.$fire.auth.currentUser) {
            
        }else{
            return redirect('/')
        }
    }
}