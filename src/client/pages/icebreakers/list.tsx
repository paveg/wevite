import { FC, useEffect, useState } from "react";
import { useIcebreakersRandom } from "../../apis/generated";
import { Link } from "react-router-dom";
import { useRandomIceBreaker } from "../../hooks/useRandomIceBreaker";
import { useQueryClient } from '@tanstack/react-query';
import { Spinner } from "../../components/spinner";
import { ErrorAlert } from "../../components/errorAlert";

export const IceBreakerListPage: FC = () => {
  const { data, isLoading, error, refetch } = useIcebreakersRandom()

  return(
    <main id="content" role="main">
      {error && <ErrorAlert className="m-6 pt-6" message={error?.message} />}
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-2xl font-bold text-black sm:text-4xl mb-4">Ice Breaker🧊</h1>
        <div className="pt-6">
          <h2 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200 text-center mb-4">
            {isLoading ? <Spinner /> : data?.data.icebreaker.question}
          </h2>
          {isLoading ? <Spinner /> :<p className="mt-1 text-gray-500">{data?.data.icebreaker.description}</p>}
        </div>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <button onClick={() => refetch()} className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center bg-orange-100 shadow-sm text-sm font-medium rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-slate-900 py-3 px-4">
            Regenerate Ice Breaker!
          </button>
        </div>
      </div>
    </main>
  )
}
