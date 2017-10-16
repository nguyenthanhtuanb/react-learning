var Com = React.createClass({

    changImage(){
        this.setState({hinh: (this.state.hinh % 4) + 1})
    },

    getInitialState(){
        return {
            hinh: 1
        };   
    },
    render(){   
        return (
            <div> 
                <img src={"img/" + this.state.hinh + ".jpg" }/>
            </div>
        )
    },
    componentDidMount(){
      setInterval(this.changImage, 1000)
    }

});
ReactDOM.render(
    <div>
        <Com />
    </div>
    ,document.getElementById("root")
);
