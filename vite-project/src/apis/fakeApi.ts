export const resetTasbeehFromServer = (): Promise<{ 
    success: boolean 
    }> =>
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                success: true
            })
        }, 2000)
    })
