let Person = {
    eat(){
        console.log("Eating")
        return this
    },

    sleep(){
        console.log('Sleeping')
        return this
    },

    run(){
        console.log("Running")
        return this
    }
}

Person.eat().sleep().run()