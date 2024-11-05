import gsap from 'gsap';

const duration = 1;


export const enter = (node: HTMLElement, { fromPath, toPath }: { fromPath: string | null | undefined, toPath: string | null | undefined  }) => { 
   
   if (fromPath === toPath) {
      return { duration: 0 };
    }

   const timeline = gsap.timeline({ defaults: { duration } });
   console.log(fromPath, 'fromPath de about');
   if (fromPath === '/') {
      // Animation spécifique si on vient de '/about'
      timeline.from(node, {
         x: '100vw',
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

   if (fromPath === toPath) {
      return { duration: 0 };
    }

   const timeline = gsap.timeline({ defaults: { duration } });

   if (toPath === '/') {
      // Animation spécifique si on va vers '/about'
      timeline.to(node, {
         x: '100vw',
         ease: 'power2.out',
      });
   } else {
      // Animation par défaut
      timeline.to(node, {
         y: '-100vh',
         ease: 'power2.out',
      });
   }

   return {
      delay: 0,
      duration: timeline.duration() * 1000,
   };
};
