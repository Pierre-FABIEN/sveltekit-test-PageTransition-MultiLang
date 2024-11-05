import gsap from 'gsap';

const duration = 1;


export const enter = (node: HTMLElement, { fromPath, toPath }: { fromPath: string | null | undefined, toPath: string | null | undefined  }) => { 
   // Si la route n'a pas changé, ne pas exécuter la transition
   if (fromPath === toPath) {
     return { duration: 0 };
   }
 
   const timeline = gsap.timeline({ defaults: { duration } });
   console.log(fromPath, 'fromPath de home');
 
   if (fromPath === '/demo') {
     // Animation spécifique si on vient de '/demo'
     timeline.from(node, {
       x: '-100vw',
       ease: 'power2.out',
     });
   } else {
     // Animation par défaut
     timeline.from(node, {
       y: '-100vh',
       ease: 'power2.out',
     });
   }
 
   return {
     delay: 0,
     duration: timeline.duration() * 1000,
   };
 };
 

 export const exit = (node: HTMLElement, { toPath, fromPath }: { toPath: string | null | undefined, fromPath: string | null | undefined }) => { 
   // Si la route n'a pas changé, ne pas exécuter la transition
   if (fromPath === toPath) {
     return { duration: 0 };
   }
 
   const timeline = gsap.timeline({ defaults: { duration } });
 
   if (toPath === '/demo') {
     // Animation spécifique si on va vers '/demo'
     timeline.to(node, {
       x: '-100vw',
       ease: 'power2.out',
     });
   } else {
     // Animation par défaut
     timeline.to(node, {
       y: '100vh',
       ease: 'power2.out',
     });
   }
 
   return {
     delay: 0,
     duration: timeline.duration() * 1000,
   };
 };
 
