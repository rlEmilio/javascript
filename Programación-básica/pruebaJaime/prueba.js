let sueldos = [1000, 1300, 1500, 1700, 2000, 2200, 2800, 3000];
        let netos =[];
        let fiscalalto =[];

        //a mostrar todos los sueldos por consola uno debajo del otro.
        //b aplicar el 15% de retencion a cada sueldo y devolver otro array con los nuevos valores.
        //c crear el array fiscalalto y guardar en el todos los sueldos mayores a 1935

        

       //a
        for(let i =0; i < sueldos.length; i++){
            console.log(sueldos[i]);
        }


        //b
        
        for(let i =0; i < sueldos.length; i++){
                    let retencion = sueldos[i]*0.15;
                    let neto = sueldos[i]-retencion;
                    netos.push(neto);
                    console.log(netos[i]);
                }


        //c
      
        for(let i =0; i < sueldos.length; i++){
            if(sueldos[i]>1935){
                fiscalalto.push(sueldos[i]);
              
            }
            
        }
       console.log(fiscalalto)


       sueldos.map(function(ele,pos){
        console.log(ele,pos)

       });