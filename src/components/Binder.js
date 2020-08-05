import React,{Component} from 'react'

class Binder extends Component{
    constructor(){
        super()
        this.state = {
            text:'i can see you now',
            visibility:'hidden'
        }
        this.handleClickMe = this.handleClickMe.bind(this)
    }
    handleClickMe(){
        let changeVisibility = this.state.visibility === 'hidden'?'visible':'hidden';

        this.setState({
            visibility:changeVisibility
        })
        // let updatedText = this.state.text
        // if(!updatedText.length){
        //     updatedText = 'I can see you now'
        // }
        // else{
        //     updatedText =''
        // }
        // this.setState({
        //     text:updatedText
        // })
    }
    render(){
        return(
            <div>
                <div>
                    <h1 style={{visibility:this.state.visibility}}>{this.state.text}</h1>
                </div>
                <button
                  className="ui primary button"
                  style={{ margin: '10px 15px' }}
                  onClick={()=>{
                      this.handleClickMe()
                  }
                  }
                >
                  Delete
                </button>
              </div>
        )
    }
}

export default Binder