import React from 'react';
import {dsnCN} from "../../hooks/helper";

function AddressFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            <p>

                Saudi Arabia, <br/>
                 Riyadh <br/>
                
            </p>
        </div>
    );
}

export default AddressFooter;