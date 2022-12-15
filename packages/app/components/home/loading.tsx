import React from 'react'
import { Column, Row, Skeleton } from 'native-base'

export function HomeLoading() {
  return (
    <>
      {[0, 1, 2].map((key) => (
        <Column key={key} my={4} space="4" overflow="hidden">
          <Row p="4" alignItems="center" space="4">
            <Skeleton w="8%" borderRadius={100} />
            <Skeleton.Text w="85%" lines={1} />
          </Row>
          <Skeleton.Text px={5} lines={1} />
          <Skeleton h="40" />
          <Row justifyContent="space-between" px={4} mb={4}>
            <Skeleton w="10%" h={5} borderRadius={50} />
            <Skeleton w="10%" h={5} borderRadius={50} />
            <Skeleton w="10%" h={5} borderRadius={50} />
          </Row>
        </Column>
      ))}
    </>
  )
}
