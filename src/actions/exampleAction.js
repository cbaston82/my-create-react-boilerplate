const exampleAction = () => (dispatch) => {
    dispatch({
        type: 'EXAMPLE_ACTION',
        payload: 'result_of_example_action',
    });
};

export default exampleAction;
