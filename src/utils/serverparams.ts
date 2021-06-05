import { bgGreen, black, bold, dim, green, greenBright, red } from 'ansi-colors'

import { log } from './log'

type IServerParams = {
    PORT: number
    HOST: string
    VERSION: string
}
class ServerParams {
    roll({ PORT, HOST, VERSION }: IServerParams): void {
        const base = `                                    *#######.                                      
                                   ##########                                   
                                   ##########.                                  
                                   ##########.                                  
                                   ##########.                                  
                                   ##########.                                  
                                   ##########.                                  
                                   ##########.                                  
    ...                            ##########.                          (((((   
 //////////*                       ##########.                      (((((((((((/
////////////////                   ##########.                 .((((((((((((((((
 ///////////////////               ##########.             (((((((((((((((((((( 
   //////////////////////          ##########          (((((((((((((((((((((    
       ./////////////////////        ######        (((((((((((((((((((((        
            ///////////////////                  *(((((((((((((((((/            
                ///////////////                  *(((((((((((((.                
                    ./////////                     ((((((((                     
                                                                                
                                                                                
                                                      ,,                        
                     /((((((((                    /##########                   
                 ((((((((((((((                   ###############               
             ((((((((((((((((((                   ###################           
        ((((((((((((((((((((((       ///////        ######################      
    (((((((((((((((((((((.         .//////////          ######################  
 ((((((((((((((((((((              ///////////               ###################
 ((((((((((((((((                  ///////////                   ###############
 (((((((((((.                      ///////////                       .#########.
    ((((                           ///////////                                  
                                   ///////////                                  
                                   ///////////                                  
                                   ///////////                                  
                                   ///////////                                  
                                   ///////////                                  
                                   ///////////                                  
                                    /////////                                   
`
        const phrase = `                            Welcome to ` + bold(red('AQUARELA')) + ` 😉`
        const running =
            '   🚀  ' +
            dim('our ') +
            bold('Mailer') +
            greenBright(' version v' + VERSION) +
            dim(' is running on ') +
            bgGreen(black(' http://' + HOST + ':' + PORT) + ' ')
        const env =
            '        You are on ' +
            bold(green('production')) +
            ' environment! Please ' +
            bold(red('BE CAREFUL')) +
            '!'
        log('')
        log(base)
        log('')
        log(phrase)
        log('')
        log('')

        log(running)
        log('')
        log(env)
    }
}

export { ServerParams }
