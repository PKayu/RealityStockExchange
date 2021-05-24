import React from 'react';

const PlayerTable = () => {
    const contestantName = 'Christian Hubicki';
    const contestantPrice = 8.50;
    const playerContestantOwned = 6;

    return (
        <div className='playerTable'>
            <table>
                <tr>
                    <th>
                        Survivor
                    </th>
                    <th>
                        Price
                    </th>
                    <th>

                    </th>
                    <th>
                        Owned
                    </th>
                </tr>
                <tr>
                    <td>
                        {contestantName}
                    </td>
                    <td>
                        {contestantPrice}
                    </td>
                    <td>

                    </td>
                    <td>
                        {playerContestantOwned}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default PlayerTable;
