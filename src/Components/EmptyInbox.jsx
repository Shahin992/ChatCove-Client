import React from "react";

const EmptyInbox = (props) =>
    // style={{width: '100%'}}
    <div className="col s12 m12 l12 xl9 main-inbox_column_empty" >
    {/*// <div className="main-inbox_column_empty">*/}
        <div className="mt-0 card message-info-details b-radius-10 box-shadow-none">
            <div className="inbox-main-section">
                <div className="chatbox-area chatbox-empty d-flex align-items-center justify-content-center" id="cutomScrollbar2" style={{overflowY: "hidden"}}>
                    <div className="row">
                        <div className="col s12 m12 l12 xl12">
                            <div className="no-data-found">

                                <img src="https://s3.us-east-1.amazonaws.com/pypepro/user/1/xgWzx1Us0i5UKVqdYEPCIYqK1Lcfe2BBPLpwQSFx.png" alt="" style={{width: '40%', maxWidth: '250px', margin: 'unset'}}/>
                                <div className="d-flex">
                                   <h2 style={{fontSize: '30px', margin: 0}}>Hello there!<span style={{fontSize: '38px'}}>👋</span></h2>
                                   {/* <img src="https://s3.us-east-1.amazonaws.com/pypepro/user/1/2AGbnZzVPqeSCc1boixRHvEyQJNrlwwTGVj3sNTI.png" alt="" style={{marginBottom: '0px', marginTop: '0px'}} />   */}
                                </div>
                               
                                <p style={{fontSize: '18px'}}>Ready to strike up a conversation? <br />Click on a message to the left to get started.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

export default EmptyInbox;
