import React, { useState } from 'react'

function FormLogin() {

    const [account, setAccount] = useState([]);
    const [userForm, setUserForm] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        const error = {};
        if (!userForm.email.trim()) {
            error.email = "Tên không rỗng";
        } else if (!/\S+@\S+\.\S+/.test(userForm.email)) {
            error.email = "Tên không đúng định dạng";
        }
        if (!userForm.password.trim()) {
            error.password = "Password Không rỗng"
        } else if (userForm.password.length < 8) {
            // có tối thiếu 8 ký tự
            error.password = "Password tối thiểu 8 ký tự"
        }
        setErrors(error);
        setAccount([...account, userForm]);
    }
    return (
        <>
            <div>Đăng nhập</div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <input type='text' placeholder='Nhập email'
                    value={userForm.email} onChange={(e) => setUserForm({ ...userForm, email: e.target.value })} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                <br />
                <input type="password" placeholder='Nhập vào mật khẩu' value={userForm.password}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                <br />
                <button type='submit'>Đăng Nhập</button>
            </form>

            <ul>
                {account.map((item) => <li>{item.email}</li>)}

            </ul>
        </>


    )

}

export default FormLogin