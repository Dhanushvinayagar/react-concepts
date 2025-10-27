
export const throttleFn = (func:Function,delay:number) => {

    let timer: boolean = false;

    return (...args:any) => {
        if(!timer) {
            func(...args);
            timer = true
            setTimeout(()=>{
                timer = false;
            },delay);
        }
    }
}