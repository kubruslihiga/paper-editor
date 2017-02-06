import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Editor-A4.css'

class Editor extends React.Component {
  render() : React.Element<any> {
    return (
      <MuiThemeProvider>
        <div className="editor">
          <span className="toolbar-buttons">
            <span className="toolbar-group">
              <FontIcon className="material-icons">home</FontIcon>
            </span>
          </span>
          <div className="content-editor">
            <div id="page-1" className="page" contentEditable={true}>
              <img src={'http://static.adzerk.net/Advertisers/76aecdbea5e04be1950b779ff8d4b7a6.png'} alt="boohoo" className="img-responsive" />
            </div>
            <div id="page-2" className="page" contentEditable={true}>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Editor;