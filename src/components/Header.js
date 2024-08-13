import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineClose, AiOutlineStar, AiOutlineArrowLeft, AiOutlineFolder } from 'react-icons/ai';

const Header = ({ onStarredToggle, onBack, showStarred, onAddNoteClick, onColorSelect, selectedColor, onArchiveToggle, showArchived }) => {
    const letterStyles = {
        n: { color: "#ffdab9" },
        o: { color: "#7dcbca" },
        t: { color: "#add8e6" },
        e: { color: "#ffb6c1" },
        s: { color: "#98fb98" }
    };

    const colorOptions = ['#ffdab9', '#7dcbca', '#add8e6', '#ffb6c1', '#98fb98','#DABFDE'];

    return (
        <div className="header">
            <h1>
                <span style={letterStyles.n}>N</span>
                <span style={letterStyles.o}>o</span>
                <span style={letterStyles.t}>t</span>
                <span style={letterStyles.e}>e</span>
                <span style={letterStyles.n}>N</span>
                <span style={letterStyles.e}>e</span>
                <span style={letterStyles.s}>s</span>
                <span style={letterStyles.t}>t</span>
            </h1>
            <div className="header-controls">
                {!showStarred && !showArchived ? (
                    <>
                        <div className="add-iconstar" onClick={onStarredToggle}>
                            <AiOutlineStar />
                        </div>
                        <div className="add-icon" onClick={onAddNoteClick}>
                            <AiOutlinePlus />
                        </div>
                        <div className="archive-icon" onClick={onArchiveToggle}>
                            <AiOutlineFolder />
                        </div>
                    </>
                ) : (
                    <div className="add-icon" onClick={onBack}>
                        <AiOutlineArrowLeft />
                    </div>
                )}
                <div className="color-options">
                    {colorOptions.map((color) => (
                        <div 
                            key={color} 
                            className="color-option" 
                            style={{ backgroundColor: color, border: color === selectedColor ? '2px solid #000' : 'none' }} 
                            onClick={() => onColorSelect(color)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
