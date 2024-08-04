/* eslint-disable react/no-unknown-property */
import imageDev from "../../assets/dev.jpg"
import imageLogo from "../../assets/logo.png"

export default function LoginPage() {
    return (
        <main className="row">
            <div className="col-md-6">
                <img src={imageDev} alt="dev" style={{ height: "100vh"}}/>
            </div>
            <div className="col-md-6" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <form style={{
                    width: "450px"
                }}>
                    <div className="pb-4" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8  
                    }}>
                        <img src={imageLogo} alt="logo" width={64}/>
                        <p className="text-white" style={{ fontSize: 36, paddingTop: 12}}>
                            CodeVerso
                        </p>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                            <label className="form-check-label text-white" for="rememberPasswordCheck"     >
                                Lembrar senha
                            </label>
                    </div>

                    <div className="d-grid">
                        <button style={{
                            backgroundColor: "#0CA88E", border: "none"
                        }} className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                        <div className="text-center">
                            <a className="small" href="#" style={{color:"#0CA88E"}}>Forgot password?</a>
                        </div>
                    </div>

                </form>
            </div>
        </main>
    )
}