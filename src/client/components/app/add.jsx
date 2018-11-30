import React, { Component } from 'react';
import ReactFilestack, { client } from 'filestack-react';
import {Button, Input, Icon, Modal} from 'react-materialize'
import './app.css'


export default class AddPost extends Component {

   
componentDidMount() {
    
}

  render() {
    return (
        <div>
            <Modal
                trigger={<Button floating large className='grey' waves='light' icon='add' />}>                      
                { (()=> { 
                    if(this.props.filter.sourse == '') {
                        return (
                        <div  className='photo'>
                        <h5>Choose file: </h5>
                        <ReactFilestack
                            apikey='AfBdIbLQwLFVl5kQltnwvz'
                            options={ {
                                accept: 'image/*',
                                fromSources: ["local_file_system"],
                                maxSize: 10 * 1024 * 1024,                
                                maxFiles: 1,
                                transformations: {
                                    crop: {
                                    aspectRatio: 1/1,
                                    force: true
                                    },
                                    rotate:true
                                }, 
                            } }
                            
                            onSuccess={ (response) => { 
                                console.log(this.props); 
                                try {
                                this.props.setFilter(response.filesUploaded[0].handle)
                            } catch(e) {
                                console.log(e)
                                this.props.setFilter(response.filesUploaded[0].handle)
                            } } }
                            onError={ (e) => console.log(error)} 
                            render={({ onPick }) => (
                                <div>
                                <Button onClick={onPick} floating large className='grey' waves='light' icon='add' />
                                </div>                        
                            ) }                                        
                        />
                        </div>)}})()}
                { (()=> { 
                    if(this.props.filter.sourse != '') {
                        return (
                        <div className='post'>    
                            <h5>Choose filter:</h5>    
                            <input 
                                type="radio" name="emotion" 
                                id="modulate" className="input-hidden" />
                            <label htmlFor="modulate">
                                <img 
                                className="mimg"
                                src={`https://cdn.filestackcontent.com/modulate=hue:155/${this.props.filter.sourse}`} 
                                alt="I'm sad" />
                            </label>
                            <input 
                                type="radio" name="emotion"
                                id="polaroid" className="input-hidden" />
                            <label htmlFor="polaroid">
                                <img 
                                src={`https://cdn.filestackcontent.com/polaroid/${this.props.filter.sourse}`}
                                alt="I'm happy" />
                            </label>
                            <input 
                                type="radio" name="emotion"
                                id="sepia" className="input-hidden" />
                            <label htmlFor="sepia">
                                <img 
                                src={`https://cdn.filestackcontent.com/sepia=tone:80/${this.props.filter.sourse}`}
                                alt="I'm happy" />
                            </label>
                            <input 
                                type="radio" name="emotion"
                                id="pixelate" className="input-hidden" />
                            <label htmlFor="pixelate">
                                <img 
                                src={`https://cdn.filestackcontent.com/pixelate=amount:2/${this.props.filter.sourse}`}
                                alt="I'm happy" />
                            </label>
                            <input 
                                type="radio" name="emotion"
                                id="blackwhite" className="input-hidden" />
                            <label htmlFor="blackwhite">
                                <img 
                                src={`https://cdn.filestackcontent.com/blackwhite=threshold:50/${this.props.filter.sourse}`}
                                alt="I'm happy" />
                            </label>
                            <h6>Comment:</h6>
                            <Input type="text"/>
                            <Button>Share</Button>
                        </div>) } 
                })() }
                </Modal>
            
        </div>
    );
  } 
}
