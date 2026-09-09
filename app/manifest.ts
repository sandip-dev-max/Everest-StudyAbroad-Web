import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest { return { name:'Everest Global Network', short_name:'Everest', description:'Study abroad guidance from Nepal.', start_url:'/', display:'standalone', background_color:'#F7F9FC', theme_color:'#0B1B3A', icons:[{src:'/assets/footerlogonew.png',sizes:'192x192',type:'image/png'}] }; }
