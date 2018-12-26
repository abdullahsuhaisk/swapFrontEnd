import React, { Component } from 'react'

export class postPictoAds extends Component {
  render() {
    return (
              <div className="upload-ad-photos">
                <label>Photos for your ad :</label>
                <div className="photos-upload-view">
                  <input
                    type="hidden"
                    id="MAX_FILE_SIZE"
                    name="MAX_FILE_SIZE"
                    value="300000"
                  />

                  <div>
                    <input
                      type="file"
                      id="fileselect"
                      name="fileselect[]"
                      multiple="multiple"
                    />
                    <div id="filedrag" style={{display: 'block'}}>
                      or drop files here
                    </div>
                  </div>

                  <div id="submitbutton" style={{display: 'none'}}>
                    <button type="submit">Upload Files</button>
                  </div>

                  <div id="messages">
                    <p>Status Messages</p>
                  </div>
                </div>
                <div className="clearfix" />
                <script src="js/filedrag.js" />
              </div>
    )
  }
}

export default postPictoAds;
