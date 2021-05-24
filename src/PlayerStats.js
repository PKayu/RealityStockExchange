import React from 'react';

const PlayerStats = () => {
    const playerBalance = 33.03;
    const playerTotalStock = 48;
    const playerNetWorth = 312.034;
    const playerMovement = 245.03;
    return (
        <div className="playerStats">
            <table>
                <tr>
                    <td className="keys">
                        Balance :
                    </td>
                    <td className='tableSpace'></td>
                    <td className="values">
                        $ {playerBalance}
                    </td>
                </tr>
                <tr>
                    <td className="keys">
                        Total Stock :
                    </td>
                    <td className='tableSpace'></td>
                    <td className="values">
                        {playerTotalStock}
                    </td>
                </tr>
                <tr>
                    <td className="keys">
                        Net Worth :
                    </td>
                    <td className='tableSpace'></td>
                    <td className="values">
                        $ {playerNetWorth}
                    </td>
                </tr>
                <tr>
                    <td className="keys">
                        Movement :
                    </td>
                    <td className='tableSpace'></td>
                    <td className="values">
                        $ {playerMovement}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default PlayerStats;
