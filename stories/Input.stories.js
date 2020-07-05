import React from 'react';

export default {
  title: 'Input',
};

export const Input = () => (
    <div className="row">
        <div className="col-10 offset-1">
            <br/>
            <br/>
            <div className="form-group register-form__row">
                <label className="form-label">Label</label>
                <input type="text" placeholder="Placeholder" className="form-control"/>
                <p className="form-subtitle">Assistive text</p>
            </div>
        </div>
        <div className="col-10 offset-1">
            <div className="form-group register-form__row error">
                <label className="form-label">Label</label>
                <input type="password" placeholder="Placeholder" className="form-control"/>
            </div>
        </div>
        <div className="col-10 offset-1">
            <div className="form-group register-form__row">
                <label className="form-label">Label</label>
                <input type="text" placeholder="Placeholder" className="form-control"/>
                <p className="form-subtitle">Assistive text</p>
            </div>
        </div>
        <div className="col-10 offset-1">
            <div className="form-group register-form__row error">
                <label className="form-label">Label</label>
                <input type="text" placeholder="Placeholder" className="form-control"/>
                <p className="form-subtitle">Assistive text</p>
            </div>
        </div>
        <div className="col-10 offset-1">
            <div className="form-group register-form__row">
                <label className="upload-file">
                    <p className="form-label">Label</p>
                    <input type="file" placeholder="Placeholder" className="form-control upload-file__input"/>
                    <div className="upload-file__panel">
                        <div className="upload-file__name">Upload your photo</div>
                        <div className="upload-file__btn">Browse</div>
                    </div>
                    <p className="form-subtitle">Assistive text</p>
                </label>
            </div>
        </div>
        <div className="col-10 offset-1">
            <div className="form-group register-form__row error">
                <label className="upload-file">
                    <p className="form-label">Label</p>
                    <input type="file" placeholder="Placeholder" className="form-control upload-file__input"/>
                    <div className="upload-file__panel">
                        <div className="upload-file__name">Upload your photo</div>
                        <div className="upload-file__btn">Browse</div>
                    </div>
                    <p className="form-subtitle">Assistive text</p>
                </label>
            </div>
        </div>
        <div className="col-10 offset-1">
            <div className="radio-btn">
                <input type="radio" name="position" id="front" defaultChecked/>
                <label htmlFor="front" className="radio-name">Сhecked</label>
            </div>
        </div>
        <div className="col-10 offset-1">
            <div className="radio-btn">
                <input type="radio" name="position" id="front2" />
                <label htmlFor="front2" className="radio-name">Unchecked</label>
            </div>
        </div>
    </div>  
);