/*Header*/
$('.head-1').scroolly([
              {
                    alias: 'before',
                    from: '',
                    to: 'doc-top = top',
                    css: {
                        opacity:'1.0',
                        transform: 'translateY(-0px)',
                        display:'block'
                   }
                },
                {
                    alias: 'slide1',
                    from: 'doc-top = top',
                    to: 'doc-top 800 = top',
                    cssFrom: {
                       opacity:'1.0',
                        transform: 'translateY(-0px)',
                        display:'block'
                    },
                    cssTo:{
                      opacity:'0.0',
                        transform: 'translateY(-800px)',
                        display:'none'
                    }
                },
                {
                    alias: 'after',
                    from: 'doc-top 600 = top',
                    to: 'doc-top 800 = top',
                    css: {
                        opacity:'0.0',
                        transform: 'translateY(-800px)',
                        display:'none'
                    }
                }
], $('.header-view'));
$('.head-2').scroolly([
                {
                    alias: 'before',
                    from: '',
                    to: 'doc-top = top',
                    css: {
                        opacity:'1.0',
                        transform: 'translateY(-0px)',
                        display:'block'
                   }
                },
                {
                    alias: 'slide1',
                    from: 'doc-top 1000 = top',
                    to: 'doc-top 1400 = top',
                    cssFrom: {
                       opacity:'1.0',
                        transform: 'translateY(-0px)',
                        display:'block'
                    },
                    cssTo:{
                      opacity:'0.0',
                        transform: 'translateY(-800px)',
                        display:'none'
                    }
                },
                {
                    alias: 'after',
                    from: 'doc-top 1000 = top',
                    to: 'doc-top 1800 = top',
                    css: {
                        opacity:'0.0',
                        transform: 'translateY(-800px)',
                        display:'none'
                    }
                }
], $('.header-view'));
/*Навигация*/
$('.nav-view-bottom').scroolly([
               {
                    alias: 'before',
                    from: 'doc-top= top',
                    to: 'doc-top 2200= top',
                    css: {
                      
                        height:'100px',
                        boxShadow: 'none',
                        padding: '25px 0',
                        backgroundColor:'transparent',
                        transition: '1s'
                   }
                },
                    {
                    alias: 'slide12',
                    from: 'doc-top 2200= top',
                    to: 'doc-top 2600 = top',
                    cssFrom: {
                      
                        height:'100px',
                       boxShadow: 'none',
                        padding: '25px 0',
                        backgroundColor:'transparent',
                        transition: '1s'
                    },
                    cssTo:{
                     
                        height:'50px',
                        boxShadow: '0px 0px 20px 10px rgba(0,0,0,0.3)',
                        padding: '0',
                        backgroundColor: 'rgba(30, 30, 30, 0.95)',
                        transition: '1s'
                    }
                },
             
                    {
                    alias: 'after',
                    from: 'doc-top 2600 = top',
                    to: 'doc-bottom',
                    css: {
                    
                        height:'50px',
                       boxShadow: '0px 0px 20px 10px rgba(0,0,0,0.3)',
                        padding: '0',
                        backgroundColor: 'rgba(30, 30, 30, 0.95)',
                        transition: '1s'
                   }
                }
], $('.nav-view-bottom'));
$('.mini_profel').scroolly([
    { 
                    alias: 'before',
                    from: 'doc-top= top',
                    to: 'doc-top 2200= top',
                    css: {
                      top:'74px'
                   }
                },
                
               
                    {
                    alias: 'slide12',
                    from: 'doc-top 2200= top',
                    to: 'doc-top 2600 = top',
                    cssFrom: {
                      top:'74px'
                    },
                    cssTo:{
                     top:'50px'
                    }
                },
             
                    {
                    alias: 'after',
                    from: 'doc-top 2600 = top',
                    to: 'doc-bottom',
                    css: {
                    top:'50px'
                   }
                }
], $('.nav-view-bottom'));
$('.logo2').scroolly([
               {
                    alias: 'before',
                    from: 'doc-top= top',
                    to: 'doc-top 2200= top',
                    css: {
                      transform: 'scale(1.5)'
                   }
                },
                              
                    {
                    alias: 'slide12',
                    from: 'doc-top 2200= top',
                    to: 'doc-top 2600 = top',
                    cssFrom: {
                        transform: 'scale(1.5)'
                    },
                    cssTo:{
                        transform: 'scale(0.9)'
                    }
                },
             
                    {
                    alias: 'after',
                    from: 'doc-top 2600 = top',
                    to: 'doc-bottom',
                    css: {
                        transform: 'scale(0.9)'
                   }
                }
], $('.nav-view-bottom'));
$('.epicode-logo-serial-effect').scroolly([
               {
                    alias: 'before',
                    from: 'doc-top= top',
                    to: 'doc-top 2200= top',
                    css: {
                      top:'25px',
                        transform:'scale(1.2)',
                        transition:'1s'
                   }
                },
                              
                    {
                    alias: 'slide12',
                    from: 'doc-top 2200= top',
                    to: 'doc-top 2600 = top',
                    cssFrom: {
                        top:'25px',
                        transform:'scale(1.2)',
                        transition:'1s'
                    },
                    cssTo:{
                        top:'0x',
                        transform:'scale(0.9)',
                        transition:'1s'
                    }
                },
             
                    {
                    alias: 'after',
                    from: 'doc-top 2600 = top',
                    to: 'doc-bottom',
                    css: {
                       top:'0px',
                        transform:'scale(0.9)',
                        transition:'1s'
                   }
                }
], $('.epicode-logo-serial'));