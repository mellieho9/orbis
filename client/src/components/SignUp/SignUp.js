const SignUp = () => {
    return (
        <div>
            <label htmlFor="email">Email *</label>
            <input type="text" name="email" value=""/>
            <label htmlFor="password">Password *</label>
            <input type="password" name="password" value=""/>
            <label htmlFor="retype">Retype Password *</label>
            <input type="password" name="retype" value=""/>
        </div>
    )
}

export default SignUp
