function getName(thoitiet){
    alert(thoitiet);
}

var Mausac = React.createClass({
    addStudent(){
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        this.setState(this.state);
    },
    layThongTin: function(){
        alert("llllllllll");
    },

    getInitialState(){
        return {
            tongHocVien: this.props.tongHocVien        
        };
    },
    render: function(){
        return(
            <div>
                <h1>{this.props.ten} - {this.props.thoitiet}</h1>
                <div>Số Học Viên: {this.state.tongHocVien}</div>
                <p>{this.props.children}</p>
                <button onClick={()=> {var str = this.props.ten + " - " + this.props.thoitiet; getName(str)}}>Lay thong tin </button>
                <button onClick={this.addStudent}>Dang Ky Hoc</button>
            </div>    
        );  
    }
});

var Name = React.createClass({
    render: function(){
        return(
            <h1>Thanh Tuan</h1>
        );  
    }
});

var InputTag = React.createClass({

    show(){
        var text = this.refs.sl.value;
        alert(text);          
    },

    render: function(){
        return (
            <div>
                <select ref="sl">
                    <option value="a">aaA</option>
                    <option value="a1">A1</option>
                    <option value="a2">A2</option>
                    <option value="a3">A3</option>
                </select>
                <input type="text" ref="txt" />
                <button onClick={this.show}>Show Ra</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <InputTag />
        <Mausac ten="Mua Xuân" thoitiet="Mưa Bay" tongHocVien="10"> Troi oi la troi </Mausac>
        <Mausac ten="Mua Xuân 1" thoitiet="Mưa Bay 1" tongHocVien="20"> Troi oi la troi </Mausac>
    </div>
    ,document.getElementById("root")
);
