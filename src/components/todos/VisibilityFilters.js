import React from "react";
import { connect } from "react-redux";

import { setFilter } from "../../data-access/Todo/actions/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={ currentFilter === activeFilter ? "filter--active" : "filter"}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
            {currentFilter}
          </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};

export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);
