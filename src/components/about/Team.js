import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';

const Team = () => {
    const dispatch = useDispatch();
    const { GET_TEAM } = bindActionCreators(actionCreators, dispatch);
    const team = useSelector((state) => state.teamReducer.team);

    const fetchTeam = useCallback(() => {
        GET_TEAM();
    }, [GET_TEAM]);

    useEffect(() => {
        if (!team || team.length === 0) {
            fetchTeam();
        }
    }, [team, fetchTeam]);

    return (
        <div className="flex flex-colummn justify-content-center align-items-center">
            <div className="flex flex-colummn justify-content-center align-items-center section-heading ms-auto text-center" style={{ width: '100%', padding: '3rem 10rem' }}>
                <h2>Our Team</h2>
                <span className="text-gray-600 text-xl">
                    Backed by agronomists, researchers, and field experts, our team is dedicated to delivering cutting-edge, eco-friendly fertilizer solutions that boost crop yields, enrich soil health, and support sustainable farming practices worldwide.
                </span>
            </div>

            <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ gap: '20px' }}>
                {team && team.length > 0 ? (
                    team.map(member => (
                        <div key={member.id} className="feature-item text-center">
                            <div className="feature-item__thumb rounded-circle"  style={{ overflow: 'hidden' }}>
                                <div className="w-100 h-100 flex-center">
                                    <img src={`https://api.farmerconnects.com${member.image}`} alt={member.name} />
                                </div>
                            </div>
                            <div className="feature-item__content mt-16">
                                <h6 className="text-lg mb-8">
                                    <div className="text-inherit text-xl">
                                        {member.name}
                                    </div>
                                </h6>
                                <span className="text-sm text-gray-400 text-lg">{member.position}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading team members...</p>
                )}
            </div>
        </div>
    );
};

export default Team;