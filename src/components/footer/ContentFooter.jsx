import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p className="mt-2">
                <strong>E</strong> <span>:</span> <a href="mailto:newsamer123@gmail.com?subject=موقع جديد&body=السلام عليكم ورحمة الله."> newsamer123@gmail.com</a>
            </p>
        </div>
    );
}

export default ContentFooter;