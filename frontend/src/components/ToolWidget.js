import React from 'react';
import {Link} from 'react-router-dom';



const ToolWidget = (props) => (
    <div>
    {props.available? <Link to="/browse-tools/">{props.count}. {props.toolName} (Available)</Link>:<Link to="/browse-tools/">{props.count}. {props.toolName} (Checked Out)</Link>}
    </div>

);

export default ToolWidget;