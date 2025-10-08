import AppCard from "../../components/AppCard/AppCard";
import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { CiSearch } from "react-icons/ci";
import useLoadapps from "../../Hooks/useLoadapps";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import AppError from '../AppError/AppError';

const Apps = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState('');
    const {loading, apps} = useLoadapps();
    const searchTerm = search.trim().toLowerCase();

    const searchedApps = searchTerm 
    ?
    apps.filter(app => app.title.toLowerCase().includes(searchTerm))
    :
    apps

    const handleSearchResult = (e) => {
        setSearch(e.target.value);
        let setTrueSearch;
        if(e.target.value) {
            setIsSearch(true);
            setTrueSearch = setTimeout(() => {
                setIsSearch(false);
            }, 300);
        }
        return () => clearTimeout(setTrueSearch);
    }

    return (
        <div className="apps-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
                    <SectionHeading title="Our All Applications" description="Explore All Apps on the Market developed by us. We code for Millions" />
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 mt-10">
                        <p className="text-[#001931] text-2xl font-semibold mb-2 md:mb-0">
                            ({searchedApps.length}) App{searchedApps.length > 1 ? 's' : ''} Found
                        </p>
                        <label className="input text-[#627382] bg-[#f5f5f5]">
                            <CiSearch className="w-5 h-5" />
                            <input onChange={(e) => handleSearchResult(e)} type="search" required placeholder="Search Apps" />
                        </label>
                    </div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {
                            loading || isSearch
                            ?
                            <Loading />
                            :
                            searchedApps.length > 0
                            ?
                            searchedApps.map(app => <AppCard key={app.id} app={app} />)
                            :
                            <div className="col-span-12">
                                <AppError />
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Apps;