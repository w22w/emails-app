import appConstants from "common/appConstants";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import css from "./SendForm.module.scss";
import ClassNames from "classnames";
import { useDispatch } from "react-redux";
import { addMessage } from "store/messages/actions";
import uuid from "react-uuid";
import cssMain from '../Main/Main.module.scss';
import history from 'common/history';

const SendForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const onSuccess = useCallback((data) => {
        dispatch(
            addMessage({
                ...data,
                createdAt: new Date().getTime(),
                messageId: uuid(),
            })
        );
    }, [ dispatch ]);
    
    const onFailure = useCallback((error) => {
        console.log(error);
    }, []);
    
    const onGoHome = (e) => {
        e && e.stopPropagation && e.stopPropagation()
        history.push(appConstants.router.root)
    }
    
    return (
        <div className={css.Form}>
            
            <form onSubmit={handleSubmit(onSuccess, onFailure)}>
                <div className={css.FormContent}>
                    <div className={css.FormHead}>
                        <div className={cssMain.HomeButton} onClick={onGoHome}>&#127968;</div>
                        Send email
                    </div>
                    <div className={css.InputBlock}>
                        <label>User Id</label>
                        <input
                            className={ClassNames({ [ css.Invalid ]: !!errors.userId })}
                            name="userId"
                            placeholder="User Id"
                            ref={register({
                                required: "userId field is required",
                                maxLength: { value: 100, message: "max length is 100" },
                            })}
                        />
                        {errors.userId && (
                            <div className={css.Message}>{errors.userId.message}</div>
                        )}
                    </div>
                    <div className={css.InputBlock}>
                        <label>User Name</label>
                        <input
                            className={ClassNames({ [ css.Invalid ]: !!errors.username })}
                            name="username"
                            placeholder="User Name"
                            ref={register({
                                required: "username field is required",
                                minLength: { value: 2, message: "min length is 2" },
                                maxLength: { value: 100, message: "max length is 100" },
                            })}
                        />
                        {errors.username && (
                            <div className={css.Message}>{errors.username.message}</div>
                        )}
                    </div>
                    <div className={css.InputBlock}>
                        <label>Destimation</label>
                        <select
                            className={ClassNames({ [ css.Invalid ]: !!errors.destination })}
                            name="destination"
                            placeholder="Select..."
                            ref={register({ required: true })}
                        >
                            <option value={appConstants.destinations.inbox}>Inbox</option>
                            <option value={appConstants.destinations.outbox}>Outbox</option>
                        </select>
                        {errors.destination && (
                            <div className={css.Message}>{errors.destination.message}</div>
                        )}
                    </div>
                    <div className={css.InputBlock}>
                        <label>Subject</label>
                        <input
                            className={ClassNames({ [ css.Invalid ]: !!errors.subject })}
                            name="subject"
                            placeholder="Subject"
                            ref={register({
                                required: "subject field is required",
                                minLength: { value: 5, message: "min length is 5" },
                                maxLength: { value: 100, message: "max length is 100" },
                            })}
                        />
                        {errors.subject && (
                            <div className={css.Message}>{errors.subject.message}</div>
                        )}
                    </div>
                    <div className={css.InputBlock}>
                        <label>Body</label>
                        <textarea rows={5}
                                  className={ClassNames({ [ css.Invalid ]: !!errors.body })}
                                  name="body"
                                  placeholder="Body"
                                  ref={register({
                                      required: "body field is required",
                                      minLength: { value: 5, message: "min length is 5" },
                                      maxLength: { value: 200, message: "max length is 200" },
                                  })}
                        >{''}</textarea>
                        {errors.body && (
                            <div className={css.Message}>{errors.body.message}</div>
                        )}
                    </div>
                    <div className={css.InputBlock}>
                        <button className={css.Submit} type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SendForm;
