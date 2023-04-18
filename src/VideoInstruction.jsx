import React from 'react'

export const VideoInstruction = (props) => {
    if(props.link){
        return (
            <div className="video-instr" id="second">
                <p className="text-ing">Video instruction: </p>
                <a className="vlink" href={props.link}>
                    <p className="show-link">{'-->link<--'}</p>
                </a>
            </div>
          )
    }
  
}
