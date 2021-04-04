import React from 'react';
import '../css/style.css';
import images_biodata from '../../public/assets/img/image_biodata.JPG';

const AboutStateless = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="main_container">
                    <div className="item">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th style={{ width: 400, textAlign: "center" }}>Images Biodata</th>
                                    <th colSpan="2" style={{ textAlign: "center" }}>Detail Biodata</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="9"><img src={images_biodata} className="image_biodata"></img></td>
                                </tr>
                                <tr>
                                    <td>Nama : </td>
                                </tr>
                                <tr>
                                    <td>Tempat, Tanggal Lahir </td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin :</td>
                                </tr>
                                <tr>
                                    <td>Alamat : g</td>
                                </tr>
                                <tr>
                                    <td>Agama : </td>
                                </tr>
                                <tr>
                                    <td>Status : </td>
                                </tr>
                                <tr>
                                    <td>Perguruan Tinggi : </td>
                                </tr>
                                <tr>
                                    <td>Hobi : </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStateless;