

const homeController=(req, res)=>{
    const data={ 'name':'pradeep' }
    res.render('index', data)
}


export {homeController}