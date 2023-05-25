import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: 1 }}>
        {this.props.opacity}
          <div className="color-box" style={{opacity: 0.9 }}>
            {this.props.opacity}
              <div className="color-box" style={{opacity: 0.8 }}>
                {this.props.opacity}
                  <div className="color-box" style={{opacity: 0.7 }}>
                  {this.props.opacity}
                    <div className="color-box" style={{opacity: 0.6 }}>
                      {this.props.opacity}
                      <div className="color-box" style={{opacity: 0.5 }}>
                        {this.props.opacity}
                          <div className="color-box" style={{opacity: 0.4 }}>
                            {this.props.opacity}
                              <div className="color-box" style={{opacity: 0.3 }}>
                                {this.props.opacity}
                                  <div className="color-box" style={{opacity: 0.2 }}>
                                  {this.props.opacity}
                                    <div className="color-box" style={{opacity: null }}>
                                      {this.props.opacity}
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }

}

