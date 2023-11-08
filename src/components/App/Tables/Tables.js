import Candidat from '../../../assets/Candidat.png';

import './Tables.scss';

const Tables = () => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="table__row">
                        <th className="table__header"><input type="checkbox" />Table header</th>
                        <th className="table__header">Tableau Header</th>
                        <th className="table__header">Tableau Header</th>
                        <th className="table__header">Tableau Header</th>
                        <th className="table__header">Candidat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table__row">
                        <td className="table__cell"><input type="checkbox" />Table Cell</td>
                        <td className="table__cell">Text<span className="badge"> Badge</span></td>
                        <td className="table__cell">Table Cell 2</td>
                        <td className="table__cell">Table Cell 3</td>
                        <td className="table__cell"><img className="table__img" src={Candidat} alt=""  /></td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell"><input type="checkbox" />Table Cell</td>
                        <td className="table__cell">Text<span className="badge"> Badge</span></td>
                        <td className="table__cell">Table Cell 2</td>
                        <td className="table__cell">Table Cell 3</td>
                        <td className="table__cell"><img className="table__img" src={Candidat} alt=""  /></td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell"><input type="checkbox" />Table Cell</td>
                        <td className="table__cell">Text<span className="badge"> Badge</span></td>
                        <td className="table__cell">Table Cell 2</td>
                        <td className="table__cell">Table Cell 3</td>
                        <td className="table__cell"><img className="table__img" src={Candidat} alt=""  /></td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell"><input type="checkbox" />Table Cell</td>
                        <td className="table__cell">Text<span className="badge"> Badge</span></td>
                        <td className="table__cell">Table Cell 2</td>
                        <td className="table__cell">Table Cell 3</td>
                        <td className="table__cell"><img className="table__img" src={Candidat} alt=""  /></td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell"><input type="checkbox" />Table Cell</td>
                        <td className="table__cell">Text<span className="badge"> Badge</span></td>
                        <td className="table__cell">Table Cell 2</td>
                        <td className="table__cell">Table Cell 3</td>
                        <td className="table__cell"><img className="table__img" src={Candidat} alt=""  /></td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell"><input type="checkbox" />Table Cell</td>
                        <td className="table__cell">Text<span className="badge"> Badge</span></td>
                        <td className="table__cell">Table Cell 2</td>
                        <td className="table__cell">Table Cell 3</td>
                        <td className="table__cell"><img className="table__img" src={Candidat} alt=""  /></td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell"><input type="checkbox" />Table Cell</td>
                        <td className="table__cell">Text<span className="badge"> Badge</span></td>
                        <td className="table__cell">Table Cell 2</td>
                        <td className="table__cell">Table Cell 3</td>
                        <td className="table__cell"><img className="table__img" src={Candidat} alt=""  /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tables;