import { QueryClient, useQuery } from "@tanstack/react-query";
// import { useLocation } from "react-router-dom";
import { getSymbolData } from "../services/dataService";
import { useLocation } from "react-router-dom";
// import queryString from "query-string";



export default function UseGetTableData() {
  const { search } = useLocation();
  // const queryObject = queryString.parse(search);

  const queryObject = Object.fromEntries(new URLSearchParams(search));
  
  // const queryClient = useQueryClient()

  // queryClient.invalidateQueries({ queryKey: ['tableData'] })

  const { data: rawData, isLoading } = useQuery<QueryClient | undefined>({
    queryKey: ["tableData",queryObject],
    queryFn: () => getSymbolData(search),
    staleTime: 100,
    // enabled: false,
    // behavior:"cache-and-network",
  });
  

  // const { data } = data || {};

  return { isLoading, rawData };
}

// export default function useProjects() {
//   const { search } = useLocation();
//   // const queryObject = queryString.parse(search);

//   const queryObject = Object.fromEntries(new URLSearchParams(search));

//   const { data, isLoading } = useQuery({
//     queryKey: ["projects", queryObject],
//     queryFn: () => geProjectsApi(search),
//   });

//   const { projects } = data || {};

//   return { isLoading, projects };
// }



// const queryClient =useQueryClient()
//   // const queryObject = Object.fromEntries(new URLSearchParams(search));

//   const { data: tickets, isPending } = useMutation({
//     mutationKey: ["tickets",],
//     mutationFn: () => getTicketsApi(merchantId),
//     onSuccess: (data) => {
//       queryClient.setQueryData('todo', )
//     },
    
//   });