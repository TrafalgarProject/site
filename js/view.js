$('.nav-view-bottom').scroolly([
               {
                    alias: 'before',
                    from: 'doc-top = top',
                    to: 'doc-top 100= top',
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
                    from: 'doc-top 100= top',
                    to: 'doc-top 150 = top',
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
                    from: 'doc-top 120 = top',
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
                    from: 'doc-top = top',
                    to: 'doc-top 100= top',
                    css: {
                      top:'74px'
                   }
                },
                
               
                    {
                    alias: 'slide12',
                    from: 'doc-top 100= top',
                    to: 'doc-top 150 = top',
                    cssFrom: {
                      top:'74px'
                    },
                    cssTo:{
                     top:'50px'
                    }
                },
             
                    {
                    alias: 'after',
                    from: 'doc-top 120 = top',
                    to: 'doc-bottom',
                    css: {
                    top:'50px'
                   }
                }
], $('.nav-view-bottom'));
$('.logo2').scroolly([
               {
                    alias: 'before',
                    from: 'doc-top = top',
                    to: 'doc-top 50= top',
                    css: {
                      transform: 'scale(1.5)'
                   }
                },
                              
                    {
                    alias: 'slide12',
                    from: 'doc-top 50= top',
                    to: 'doc-top 150 = top',
                    cssFrom: {
                        transform: 'scale(1.5)'
                    },
                    cssTo:{
                        transform: 'scale(0.9)'
                    }
                },
             
                    {
                    alias: 'after',
                    from: 'doc-top 150 = top',
                    to: 'doc-bottom',
                    css: {
                        transform: 'scale(0.9)'
                   }
                }
], $('.nav-view-bottom'));
$('.epicode-logo-serial-effect').scroolly([
               {
                    alias: 'before',
                    from: 'doc-top = top',
                    to: 'doc-top 100= top',
                    css: {
                      top:'25px',
                        transform:'scale(1.2)',
                        transition:'1s'
                   }
                },
                              
                    {
                    alias: 'slide12',
                    from: 'doc-top 100= top',
                    to: 'doc-top 150 = top',
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
                    from: 'doc-top 150 = top',
                    to: 'doc-bottom',
                    css: {
                       top:'0px',
                        transform:'scale(0.9)',
                        transition:'1s'
                   }
                }
], $('.epicode-logo-serial'));